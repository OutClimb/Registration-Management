import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FormResponse } from '@/types/form'
import { Link } from '@tanstack/react-router'

export function FormsTable({ data }: { data: FormResponse }) {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Template</TableHead>
              <TableHead>Opens On</TableHead>
              <TableHead>Closes On</TableHead>
              <TableHead>Max Submissions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.slug}>
                <TableCell>
                  <Link to="/manage/form/$formSlug" params={{ formSlug: item.slug }}>
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell>{item.template}</TableCell>
                <TableCell>{item.opens_on === '' ? 'Always' : dateFormatter.format(new Date(item.opens_on))}</TableCell>
                <TableCell>
                  {item.closes_on === '' ? 'Never' : dateFormatter.format(new Date(item.closes_on))}
                </TableCell>
                <TableCell>{item.max_submissions === 0 ? 'Unlimited' : `${item.max_submissions} People`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
