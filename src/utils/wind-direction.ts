export const windDirection = (degrees: number): string => {
    const directionIds = [
        'north', 
        'northEast', 
        'east', 
        'southEast', 
        'south', 
        'southWest', 
        'west', 
        'northWest'
    ]
    const index = Math.round(degrees / 45) % 8;
    return directionIds[index];
}