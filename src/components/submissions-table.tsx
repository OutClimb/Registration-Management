import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FormDetailResponse } from '@/types/form'
import { SubmissionResponse } from '@/types/submission'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { downloadCSV } from '@/utils/csv'

export function SubmissionsTable({ form, submissions }: { form: FormDetailResponse; submissions: SubmissionResponse }) {
  const fields = Object.values(form.fields).sort((a, b) => a.order - b.order)

  const handleDownload = () => {
    const headers = fields.map((field) => field.slug)
    downloadCSV(headers, submissions, `${form.slug}-submissions`)
  }

  return (
    <div>
      <div className="border-b px-6 py-4">
        <h2 className="flex items-center text-xl font-semibold">
          <span className="flex-auto">Submissions ({submissions.length})</span>
          <Button variant="outline" onClick={handleDownload}>
            <Download />
            Download
          </Button>
        </h2>
      </div>
      <div className="overflow-x-auto">
        {submissions.length === 0 && (
          <div className="flex items-center justify-center h-32">
            <p className="text-gray-500">No submissions yet.</p>
          </div>
        )}
        {submissions.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                {fields.map((field) => (
                  <TableHead key={field.slug}>{field.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((item) => (
                <TableRow key={`${item['ip_address']}-${item['submitted_on']}`}>
                  {fields.map((field) => (
                    <TableCell key={field.slug}>{item[field.slug]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
