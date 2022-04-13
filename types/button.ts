export interface buttonState {
    type?: 'submit' | 'reset' | 'button',
    title: string,
    color?: string,
    padding?: string,
    fontWeight?: string,
    cursor?: string,
    maxLength?: number,
    background?: string,
    border?: string,
    borderRadius?: string,
    onClick?: any,
    // onClick?: React.MouseEventHandler<HTMLButtonElement> | ((value: string) => void),
    margin?: string,
    borderBottom?: any,
    fontSize?: string,
    width?: string,
    minWidth?: string,
    fontWeightClass?: string,
    hoverClassColor?: string,
    ref?: any
    disabled?: boolean;
    selected?: boolean;
    selectClass?: string;
}