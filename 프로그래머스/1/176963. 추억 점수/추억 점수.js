const solution = (names, yearning, photos) => {
    const nameScoreMap = {}
    names.forEach((name, idx) => nameScoreMap[name] = yearning[idx])
    return photos.map(photo => photo.reduce((a,b) => a + (nameScoreMap[b] ?? 0), 0))
}