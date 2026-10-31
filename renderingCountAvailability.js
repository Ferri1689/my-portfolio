import { getArraygCard } from "./getArraygCard.js";

export async function renderingCountAvailability () {
    const data = await getArraygCard()
    let pendantCount = 0
    data.forEach(element => {
        if(element.type.includes("pendant")) {
            pendantCount++
        }
    });
    document.querySelector('#pendant-count').textContent = pendantCount

    let ceilingCount = 0
    data.forEach(element => {
        if(element.type.includes("ceiling")) {
            ceilingCount++
        }
    });
    document.querySelector('#ceiling-count').textContent = ceilingCount

    let overheadCount = 0
    data.forEach(element => {
        if(element.type.includes("overhead")) {
            overheadCount++
        }
    });
    document.querySelector('#overhead-count').textContent = overheadCount

    let pointCount = 0
    data.forEach(element => {
        if(element.type.includes("point")) {
            pointCount++
        }
    });
    document.querySelector('#point-count').textContent = pointCount

    let nightlightsCount = 0
    data.forEach(element => {
        if(element.type.includes("nightlights")) {
            nightlightsCount++
        }
    });
    document.querySelector('#nightlights-count').textContent = nightlightsCount
}