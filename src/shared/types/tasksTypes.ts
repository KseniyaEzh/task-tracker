export interface ITask {
  label?: string,
  description?: string,
  team?: {
    id: number,
    img: string,
  }[],
}