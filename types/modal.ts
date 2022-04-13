export interface modalAction {
    type: string;
    payload?: { value: string; id: number};
  }
  
  export interface modalState {
    modalOpen: boolean;
    id: number | null;
    typeModal: string | null;
  }