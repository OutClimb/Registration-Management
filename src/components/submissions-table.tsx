import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FormDetailResponse } from '@/types/form'
import { SubmissionResponse } from '@/types/submission'
import { Button } from './ui/button'
import { Download, Trash2 } from 'lucide-react'
import { downloadCSV } from '@/utils/csv'
import React from 'react'
import { getRole } from '@/utils/user'

export function SubmissionsTable({ form, submissions }: { form: FormDetailResponse; submissions: SubmissionResponse }) {
  const [submissionIdToDelete, setSubmissionIdToDelete] = React.useState<string | null>(null)

  const fields = Object.values(form.fields).sort((a, b) => a.order - b.order)

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const handleDownload = () => {
    const headers = ['submitted_on', ...fields.map((field) => field.slug)]
    downloadCSV(headers, submissions, `${form.slug}-submissions`)
  }

  const handleSubmissionDeletion = (id: string) => {
    if (getRole() !== 'admin') {
      return
    }

    setSubmissionIdToDelete(id)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSubmissionIdToDelete(null)
    }
  }

  const handleNoClick = () => {
    setSubmissionIdToDelete(null)
  }

  const handleYesClick = () => {}

  return (
    <div>
      <div className="border-b px-6 py-4">
        <h2 className="flex items-center text-xl font-semibold">
          {submissions.length === 0 && <span className="flex-auto">Submissions</span>}
          {submissions.length > 0 && (
            <>
              <span className="flex-auto">Submissions ({submissions.length})</span>
              <Button variant="outline" onClick={handleDownload}>
                <Download />
                Download
              </Button>
            </>
          )}
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
                <TableHead>Submitted On</TableHead>
                {fields.map((field) => (
                  <TableHead key={field.slug}>{field.name}</TableHead>
                ))}
                {getRole() === 'admin' && <TableHead>Actions</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((item) => (
                <TableRow key={`${item['ip_address']}-${item['submitted_on']}`}>
                  <TableCell>{dateFormatter.format(new Date(item['submitted_on']))}</TableCell>
                  {fields.map((field) => (
                    <TableCell key={field.slug}>{item[field.slug]}</TableCell>
                  ))}
                  {getRole() === 'admin' && (
                    <TableCell>
                      <Button variant="destructive" onClick={() => handleSubmissionDeletion(item['id'])}>
                        <Trash2 /> Delete Submission?
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {getRole() === 'admin' && (
        <AlertDialog open={submissionIdToDelete !== null} onOpenChange={handleOpenChange}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone, this will permanently delete this submission.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline" onClick={handleNoClick}>
                  No
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="destructive" onClick={handleYesClick}>
                  Yes
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  )
}
