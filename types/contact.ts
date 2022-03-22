export interface contact {
    address: string,
    phone: string,
    working_hours: string,
    setModalIsOpenFeedBack: (value: boolean) => void,
    modalIsOpenFeedBack: boolean,
    setModalIsOpen: (value: boolean) => void,
    modalIsOpen?: boolean,
}