import { shopsProps } from "./shopsList"

export interface HomeProps {
    shops: shopsProps,
    catalog: any,
    errorCode: any,
    message: string
}

export interface OrderingProps {
    shops: shopsProps
}

export interface PrivateOfficeProps {
    shops: shopsProps
}

export interface WorkWithUsProps {
    shops: shopsProps
}

export interface AboutCompanyProps {
    shops: shopsProps
}

export interface ContactsProps {
    shops: shopsProps
}