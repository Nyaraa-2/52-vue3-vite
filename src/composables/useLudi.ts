export function useLudi() {
  const doCreateLudi = async (
    name: string,
    specialite: string,
    lanisteId: number
  ) => {
    try {
      await fetch('http://localhost:3000/ludis', {
        method: 'POST',
        body: JSON.stringify({
          nom: name,
          specialite: specialite,
          lanisteId: lanisteId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error()
        }
      })
    } catch (error) {
      throw new Error()
    }
  }
  return { doCreateLudi }
}
