interface getRightPetsState {
  petsBottle: { smallPet: {}; mediumPet: {}; bigPet: {} };
  step: number;
}

export const getRightPets = ({ petsBottle, step }: getRightPetsState) => {
    const { smallPet, mediumPet, bigPet } = petsBottle;

    if ( step === 0.5 ) {
        return smallPet;
    } else if ( step === 1 ) {
        return mediumPet
    } else if ( step === 1.5 ) {
        return bigPet;
    }
};
