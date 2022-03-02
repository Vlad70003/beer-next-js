export const inputChanger = (event:React.ChangeEvent<HTMLInputElement>, setState:any) => {
    setState(event.target.value);
}