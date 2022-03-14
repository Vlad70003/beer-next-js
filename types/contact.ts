export interface contact {
    address: string,
    phone: string,
    working_hours: string,
    setModalIsOpen: (value: boolean) => void,
    modalIsOpen: boolean,
}