export type FormResponse = Array<Form>

export interface Form {
    slug: string
    name: string
    template: string
    opens_on: string
    closes_on: string
    max_submissions: number
}
