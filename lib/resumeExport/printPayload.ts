export const RESUME_PRINT_STORAGE_PREFIX = 'resume-print-payload:';

export const getResumePrintStorageKey = (token: string) =>
    `${RESUME_PRINT_STORAGE_PREFIX}${token}`;
