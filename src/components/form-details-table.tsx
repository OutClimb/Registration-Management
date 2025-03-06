import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'
import { FormDetailResponse } from '@/types/form'

export function FormDetailsTable({ form }: { form: FormDetailResponse }) {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="w-1">Slug</TableHead>
              <TableCell>{form.slug}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Template</TableHead>
              <TableCell>{form.template}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Opens On</TableHead>
              <TableCell>{form.opens_on === '' ? 'Always' : dateFormatter.format(new Date(form.opens_on))}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Closes On</TableHead>
              <TableCell>{form.closes_on === '' ? 'Never' : dateFormatter.format(new Date(form.closes_on))}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Max Number of Submissions</TableHead>
              <TableCell>{form.max_submissions === 0 ? 'Unlimited' : `${form.max_submissions} People`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
