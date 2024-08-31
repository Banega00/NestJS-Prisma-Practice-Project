
export const CustomErrorType = {
    UNKNOWN_ERROR: {
        code: 10000,
        message: 'Unknown error',
        status: 500,
    },
    NOT_FOUND: {
        code: 10001,
        message: 'Not found',
        status: 404,
    },
    VALIDATION_ERROR: {
        code: 10002,
        message: 'Validation error',
        status: 422,
    },
    FILE_ALREADY_EXISTS: {
        code: 10003,
        message: 'File already exists',
        status: 400,
    },
    FILE_NOT_FOUND: {
        code: 10004,
        message: 'File not found',
        status: 404,
    },
    COMPANY_NOT_FOUND: {
        code: 10005,
        message: 'Company not found',
        status: 404,
    },
    TEMPLATE_NOT_FOUND: {
        code: 10006,
        message: 'Template not found',
        status: 404,
    },
    INVALID_AUTHORIZATION: {
        code: 10007,
        message: 'Invalid authorization',
        status: 401,
    },
    USER_ALREADY_EXISTS: {
        code: 10008,
        message: 'User with given email already exists',
        status: 400,
    },
    UNAUTHORIZED: {
        code: 10009,
        message: 'Unauthorized',
        status: 401,
    },
    FORBIDDEN: {
        code: 10010,
        message: 'Action forbidden',
        status: 403,
    },
    USER_NOT_FOUND: {
        code: 10011,
        message: 'User not found',
        status: 404,
    },
    INVALID_REFRESH_TOKEN: {
        code: 10012,
        message: 'Invalid refresh token',
        status: 403,
    },
    ERROR_SENDING_EMAIL: {
        code: 10013,
        message: 'Error sending mail',
        status: 500,
    },
    INVALID_VERIFICATION_TOKEN: {
        code: 10014,
        message: 'Invalid verification token',
        status: 400,
    },
    INVALID_PASSWORD: {
        code: 10015,
        message: 'Invalid password',
        status: 400,
    },
    TEST_NOT_FOUND: {
        code: 10016,
        message: 'Test not found',
        status: 404,
    },
    QUESTION_NOT_FOUND: {
        code: 10017,
        message: 'Question not found',
        status: 404,
    },
    INVALID_QUESTION_CONFIG: {
        code: 10018,
        message: 'Invalid question config',
        status: 400,
    },
    USER_NOT_VERIFIED: {
        code: 10019,
        message: 'User not verified',
        status: 401,
    },
    APPLICATION_NOT_FOUND: {
        code: 10020,
        message: 'Application not found',
        status: 404,
    },
    TEST_QUESTION_ALREADY_ANSWERED: {
        code: 10021,
        message: 'Test question already answered',
        status: 400,
    },
    TEST_QUESTION_NOT_FOUND: {
        code: 10022,
        message: 'Test question not found',
        status: 404,
    },
    PREVIOUS_TEST_QUESTION_NOT_ANSWERED: {
        code: 10023,
        message: 'Previous test question not answered',
        status: 400,
    },
    INVALID_APPLICATION_STEP_NUMBER: {
        code: 10024,
        message: 'Invalid application step number',
        status: 400,
    },
    APPLICANT_NOT_FOUND: {
        code: 10025,
        message: 'Applicant not found',
        status: 404,
    },
    APPLICATION_STEP_NOT_FOUND: {
        code: 10026,
        message: 'Application step not found',
        status: 404,
    },
    SAME_NEW_PASSWORD: {
        code: 10027,
        message: 'Same new password',
        status: 400,
    },
    APPLICATION_ALREADY_VERIFIED: {
        code: 10028,
        message: 'Application already verified',
        status: 400,
    },
    MICRODIMENSION_NOT_FOUND: {
        code: 10029,
        message: 'Microdimension not found',
        status: 404,
    },
    MICRODIMENSION_IN_USE: {
        code: 10030,
        message: 'Microdimension in use',
        status: 400,
    },
    POSITION_NOT_FOUND: {
        code: 10031,
        message: 'Position not found',
        status: 404,
    },
    TEST_HAS_NO_QUESTIONS: {
        code: 10032,
        message: 'Test has no questions',
        status: 400,
    },
    MICRODIMENSION_PROTECTED: {
        code: 10033,
        message: 'Microdimension protected',
        status: 400,
    },
    APPLICATION_FOR_POSITION_ALREADY_EXISTS: {
        code: 10034,
        message: 'You are not allowed to apply for this position more than once.',
        status: 400,
    },
    INVALID_TEST_STATE: {
        code: 10035,
        message: 'Invalid test state',
        status: 400,
    },
    ONLY_MANUAL_TESTS_CAN_BE_SCORED: {
        code: 10036,
        message: 'Only manual tests can be scored',
        status: 400,
    },
    CANNOT_FINISH_SCORING: {
        code: 10037,
        message: 'Cannot finish scoring',
        status: 400,
    },
    PREVIOUS_STEP_NOT_PASSED: {
        code: 10038,
        message: 'Previous step not passed',
        status: 400,
    },
    CANNOT_PASS_STEP: {
        code: 10039,
        message: 'Cannot pass step',
        status: 400,
    },
    ANSWER_NOT_SCORABLE: {
        code: 10040,
        message: 'Answer not scorable',
        status: 400,
    },
    MAX_NUMBER_OF_STEPS_REACHED: {
        code: 10041,
        message: 'Maximum number of steps reached',
        status: 400,
    },
    USER_DEACTIVATED: {
        code: 10042,
        message: 'User deactivated',
        status: 400,
    },

    TEST_ALREADY_SCORED: {
        code: 10041,
        message: 'Test already scored',
        status: 400,
    },

    INVALID_EMAIL: {
        code: 10042,
        message: 'Invalid email',
        status: 400,
    },
    RESOURCE_FORBIDDEN_FOR_COMPANY: {
        code: 10043,
        message: 'Resource forbidden for company',
        status: 403,
    },
    ROLE_NOT_FOUND: {
        code: 10044,
        message: 'Role not found',
        status: 404,
    },
    INSUFFICIENT_PERMISSIONS: {
        code: 10045,
        message: 'Insufficient permissions',
        status: 403,
    },
    INVALID_USER_STATUS: {
        code: 10046,
        message: 'Invalid user status',
        status: 400,
    },
    INVALID_FILE_TYPE: {
        code: 10043,
        message: 'Invalid file type',
        status: 400,
    },
    POSITION_CLOSED: {
        code: 10044,
        message: 'Application for this position is closed',
        status: 400,
    },
    APPLICATION_FINISHED: {
        code: 10045,
        message: 'Application finished',
        status: 400,
    },
    HIRING_FLOW_NOT_FOUND: {
        code: 10046,
        message: 'Hiring flow not found',
        status: 404,
    },
    AUTH_STEP_CAN_HAVE_ONLY_ONE_TEST: {
        code: 10047,
        message: 'Auth step can have only one test attached',
        status: 400,
    },
    UNSUPPORTED_STEP_TEST_TYPE: {
        code: 10048,
        message: 'Unsupported step test type',
        status: 400,
    },

    INVALID_APPLICATION_STATE: {
        code: 10049,
        message: 'Invalid application state',
        status: 400,
    },
    APPLICANT_NOT_COMPLETED: {
        code: 10047,
        message: 'Applicant not completed',
        status: 400,
    },
    POSITION_INVALID_STATE: {
        code: 10048,
        message: 'Position invalid state',
        status: 400,
    },
    INVALID_STEP_STATE: {
        code: 10049,
        message: 'Invalid step state',
        status: 400,
    },
    EMAIL_TEMPLATE_NOT_FOUND: {
        code: 10050,
        message: 'Email template not found',
        status: 404,
    },
    SENDGRID_VERIFICATION_REQUEST_ALREADY_EXISTS: {
        code: 10051,
        message: 'Sendgrid verification request already exists',
        status: 400,
    },
    SOURCE_ALREADY_EXISTS: {
        code: 10052,
        message: 'Source already exists',
        status: 400,
    },
    SOURCE_NOT_FOUND: {
        code: 10053,
        message: 'Source not found',
        status: 404,
    },
    SENDGRID_VERIFICATION_ADDRESS_ALREADY_EXISTS: {
        code: 10054,
        message: 'Email address already exists',
        status: 400
    },
    POSITION_CANNOT_BE_ACTIVATED: {
        code: 10055,
        message: 'Position cannot be activated',
        status: 400
    },
    AI_PROCESSING_STATE_NOT_VALID: {
        code: 10056,
        message: 'AI processing state not valid',
        status: 400
    },
    MICRODIMENSION_ALREADY_EXISTS: {
        code: 10057,
        message: 'Microdimension already exists',
        status: 400
    }
} as const;

export class CustomError extends Error {
    type: keyof typeof CustomErrorType;
    error: Error;
    status: number;
    code: number;
    message: string;
    payload: any;

    constructor(obj?: Partial<Omit<CustomError, 'error'> & { error: Error | unknown }> | string){
        if(typeof obj === 'string'){
            super(obj);
        }else{
            super(obj?.message);
            this.type = obj?.type || 'UNKNOWN_ERROR'
            this.error = obj?.error as Error;
            this.status = obj?.status || CustomErrorType[this.type].status;
            this.code = obj?.code || CustomErrorType[this.type].code;
            this.message = obj?.message || CustomErrorType[this.type].message;
            this.payload = obj?.payload;
        }
    }

}