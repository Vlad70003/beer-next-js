export interface modalAction {
    type: string;
    payload?: any;
  }
  
  export interface modalState {
    modalOpen: boolean;
    typeModal: string | null;
  }