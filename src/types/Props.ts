export interface BoardProps {
	title: string,
	droppableId: number,
}

export interface TaskProps {
	value: string,
	draggableId: number,
	draggableIndex: number,
	labels: string[]
}