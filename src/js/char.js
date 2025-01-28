export function healthStatus(charInfo) {
    if (charInfo.health > 50) {
        return 'healthy';
    }
    else if (charInfo.health <= 50 && charInfo.health > 15) {
        return 'wounded';
    }
    else {
        return 'critical';
    }
}