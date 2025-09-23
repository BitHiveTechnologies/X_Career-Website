'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth/AuthContextBackend';
import { X, ChevronLeft, ChevronRight, User, GraduationCap } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    // Educational Information
    qualification: '',
    stream: '',
    yearOfPassout: '',
    cgpaOrPercentage: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { register } = useAuth();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user starts typing
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.password) {
      setError('Please enter a password');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.qualification) {
      setError('Please select your qualification');
      return false;
    }
    if (!formData.stream) {
      setError('Please select your stream');
      return false;
    }
    if (!formData.yearOfPassout) {
      setError('Please enter your year of passout');
      return false;
    }
    const year = parseInt(formData.yearOfPassout);
    if (isNaN(year) || year < 2000 || year > new Date().getFullYear() + 5) {
      setError('Please enter a valid year of passout');
      return false;
    }
    if (!formData.cgpaOrPercentage) {
      setError('Please enter your CGPA or Percentage');
      return false;
    }
    const cgpa = parseFloat(formData.cgpaOrPercentage);
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      setError('Please enter a valid CGPA/Percentage (0-10 for CGPA, 0-100 for Percentage)');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;

    setIsLoading(true);
    setError('');

    const year = parseInt(formData.yearOfPassout);
    const cgpa = parseFloat(formData.cgpaOrPercentage);

    const result = await register(
      formData.name,
      formData.email,
      formData.password,
      formData.mobile,
      formData.qualification,
      formData.stream,
      year,
      cgpa
    );

    if (result.success) {
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        qualification: '',
        stream: '',
        yearOfPassout: '',
        cgpaOrPercentage: '',
      });
      setCurrentStep(1);
      
      // Close modal and redirect after showing success message
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        // Navigate to homepage
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
      }, 2000);
    } else {
      setError(result.error || 'Registration failed');
    }

    setIsLoading(false);
  };

  const fillTestData = () => {
    setFormData({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'TestPass123!',
      confirmPassword: 'TestPass123!',
      mobile: '9876543210',
      qualification: 'B.Tech',
      stream: 'CSE',
      yearOfPassout: '2023',
      cgpaOrPercentage: '8.5',
    });
    setError('');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Account Created Successfully!</h3>
            <p className="text-gray-600 mb-4">
              Welcome to X Career! Your account has been created and you're now logged in.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[hsl(196,80%,45%)]"></div>
              <span>Redirecting to homepage...</span>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] rounded-full flex items-center justify-center">
              {currentStep === 1 ? <User className="w-5 h-5 text-white" /> : <GraduationCap className="w-5 h-5 text-white" />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {currentStep === 1 ? 'Personal Information' : 'Educational Details'}
              </h2>
              <p className="text-sm text-gray-600">
                Step {currentStep} of 2
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={fillTestData}
              className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
              title="Fill with test data"
            >
              Test Data
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {currentStep === 1 ? (
            // Step 1: Personal Information
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="Enter your 10-digit mobile number"
                  maxLength={10}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          ) : (
            // Step 2: Educational Information
            <div className="space-y-4">
              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification *
                </label>
                <select
                  id="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleInputChange('qualification', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                >
                  <option value="">Select your qualification</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.E">B.E</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="B.Com">B.Com</option>
                  <option value="B.A">B.A</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="M.E">M.E</option>
                  <option value="M.Sc">M.Sc</option>
                  <option value="M.Com">M.Com</option>
                  <option value="M.A">M.A</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="BCA">BCA</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">
                  Stream *
                </label>
                <select
                  id="stream"
                  value={formData.stream}
                  onChange={(e) => handleInputChange('stream', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                >
                  <option value="">Select your stream</option>
                  <option value="CSE">Computer Science Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="ECE">Electronics and Communication</option>
                  <option value="EEE">Electrical and Electronics</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="CE">Civil Engineering</option>
                  <option value="AE">Aerospace Engineering</option>
                  <option value="CS">Computer Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="yearOfPassout" className="block text-sm font-medium text-gray-700 mb-1">
                  Year of Passout *
                </label>
                <input
                  id="yearOfPassout"
                  type="number"
                  value={formData.yearOfPassout}
                  onChange={(e) => handleInputChange('yearOfPassout', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="e.g., 2023"
                  min="2000"
                  max={new Date().getFullYear() + 5}
                />
              </div>

              <div>
                <label htmlFor="cgpaOrPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                  CGPA or Percentage *
                </label>
                <input
                  id="cgpaOrPercentage"
                  type="number"
                  step="0.01"
                  value={formData.cgpaOrPercentage}
                  onChange={(e) => handleInputChange('cgpaOrPercentage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(196,80%,45%)] focus:border-[hsl(196,80%,45%)]"
                  placeholder="e.g., 8.5 (for CGPA) or 85 (for Percentage)"
                  min="0"
                  max="10"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            {currentStep === 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] transition-all duration-300"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-6 py-2 bg-gradient-to-r from-[hsl(196,80%,45%)] to-[hsl(175,70%,41%)] text-white rounded-lg hover:from-[hsl(196,80%,40%)] hover:to-[hsl(175,70%,36%)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
