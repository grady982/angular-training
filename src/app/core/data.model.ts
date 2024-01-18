export interface ToDo {
    title: string;
    content: string;
    isUrgent: boolean;
    isFinish: boolean;
}

export interface ForecaseRsp {
    success: boolean;
    result: any;
    records: any;
}