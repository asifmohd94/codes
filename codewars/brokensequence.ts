export function findMissingNumber(sequence): number {
    if (!sequence) return 0
    if (/[^ 0-9]/.test(sequence)) return 1
    sequence = sequence.split(' ').sort((a, b) => a - b)
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] != i + 1) return i + 1
    }
    return 0
}