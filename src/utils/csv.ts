export function downloadCSV(headers: string[], rows: Record<string, string>[], filename: string): void {
  const csvContent = [
    headers.join(','),
    ...rows.map(row => headers.map(header => row[header]).join(','))
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}.csv`
  a.click()
}