///////////
// Index //
///////////

export const calculNoteIndex = (
  noteIndicateurUn: number | undefined,
  noteIndicateurDeux: number | undefined,
  noteIndicateurTrois: number | undefined,
  noteIndicateurQuatre: number | undefined,
  noteIndicateurCinq: number | undefined
): { noteIndex: number | undefined; totalPointCalculable: number } => {
  const noteIndicateurUnPointCalculable =
    noteIndicateurUn !== undefined ? 40 : 0;
  const noteIndicateurDeuxPointCalculable =
    noteIndicateurDeux !== undefined ? 20 : 0;
  const noteIndicateurTroisPointCalculable =
    noteIndicateurTrois !== undefined ? 15 : 0;
  const noteIndicateurQuatrePointCalculable =
    noteIndicateurQuatre !== undefined ? 15 : 0;
  const noteIndicateurCinqPointCalculable =
    noteIndicateurCinq !== undefined ? 10 : 0;

  const totalPointCalculable =
    noteIndicateurUnPointCalculable +
    noteIndicateurDeuxPointCalculable +
    noteIndicateurTroisPointCalculable +
    noteIndicateurQuatrePointCalculable +
    noteIndicateurCinqPointCalculable;

  if (totalPointCalculable < 75) {
    return {
      noteIndex: undefined,
      totalPointCalculable
    };
  }

  const totalPoint =
    (noteIndicateurUn || 0) +
    (noteIndicateurDeux || 0) +
    (noteIndicateurTrois || 0) +
    (noteIndicateurQuatre || 0) +
    (noteIndicateurCinq || 0);

  const noteIndex = Math.round((totalPoint * 100) / totalPointCalculable);

  return {
    noteIndex,
    totalPointCalculable
  };
};
