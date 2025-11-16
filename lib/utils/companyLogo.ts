/**
 * Utility functions for company logo handling
 * Generates text-based fallback logos when no logo is provided
 */

/**
 * Generates a data URL for a text-based company logo
 * @param companyName - The name of the company
 * @param size - Size of the logo (default: 80)
 * @returns Data URL of the SVG logo
 */
export function generateCompanyLogo(companyName: string, size: number = 80): string {
  // Extract initials from company name
  const initials = getCompanyInitials(companyName);
  
  // Generate a color based on company name (deterministic)
  const color = generateColorFromString(companyName);
  const backgroundColor = lightenColor(color, 0.85);
  
  // Create SVG
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="${backgroundColor}" rx="${size * 0.2}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${size * 0.4}" 
        font-weight="bold" 
        fill="${color}" 
        text-anchor="middle" 
        dominant-baseline="central"
      >
        ${initials}
      </text>
    </svg>
  `.trim();
  
  // Convert to data URL
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Extracts initials from company name
 * @param companyName - The name of the company
 * @returns Initials (max 2 characters)
 */
function getCompanyInitials(companyName: string): string {
  if (!companyName || companyName.trim().length === 0) {
    return 'CO';
  }
  
  const words = companyName.trim().split(/\s+/);
  
  if (words.length === 1) {
    // Single word: take first 2 characters
    return words[0].substring(0, 2).toUpperCase();
  }
  
  // Multiple words: take first letter of first two words
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Generates a color from a string (deterministic)
 * @param str - Input string
 * @returns Hex color code
 */
function generateColorFromString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Generate a color in the blue-green range (matching the site theme)
  const hue = (hash % 60) + 175; // 175-235 (blue-green range)
  const saturation = 60 + (hash % 20); // 60-80%
  const lightness = 40 + (hash % 15); // 40-55%
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/**
 * Lightens a color
 * @param color - HSL color string
 * @param factor - Lightness factor (0-1)
 * @returns Lighter HSL color string
 */
function lightenColor(color: string, factor: number): string {
  // Extract HSL values
  const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
  if (!match) {
    return 'hsl(196, 60%, 95%)'; // Default light background
  }
  
  const hue = parseInt(match[1]);
  const saturation = parseInt(match[2]);
  const lightness = Math.min(95, parseInt(match[3]) + (100 - parseInt(match[3])) * factor);
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/**
 * Gets the company logo URL or generates a fallback
 * @param companyName - The name of the company
 * @param logoUrl - Optional logo URL from database
 * @param size - Size of the logo (default: 80)
 * @returns Logo URL or data URL of generated logo
 */
export function getCompanyLogo(companyName: string, logoUrl?: string | null, size: number = 80): string {
  if (logoUrl && logoUrl.trim().length > 0) {
    return logoUrl;
  }
  
  return generateCompanyLogo(companyName, size);
}

