type MyError = Error | string | any;
export type Callback = (error: MyError, result?: any) => void;
export interface InitContructor {
    is_debug: boolean;
    chatbox_secret_key: string;
}
export interface CustomerInfo {
    public_profile: {
        fb_page_id: string;
        fb_client_id: string;
        page_name?: string;
        client_name?: string;
    };
    conversation_contact?: {
        client_phone?: string;
        client_email?: string;
    };
}
export interface GetCustomerInfoCallback {
    (error: MyError, result?: CustomerInfo): void;
}
export {};
