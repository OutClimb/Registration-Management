export type FormResponse = Array<Form>

export interface Form {
  slug: string
  name: string
  template: string
  opens_on: string
  closes_on: string
  max_submissions: number
}

export interface FormField {
    name: string
    slug: string
    type: string
    metadata: string
    required: boolean
    validation: string
    order: number
}

export interface FormDetailResponse {
    slug: string
    name: string
    template: string
    opens_on: string
    closes_on: string
    max_submissions: number
    fields: Record<string, FormField>
  }
