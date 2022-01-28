export interface BoardProps {
	title: string,
	droppableId: number,
}

export interface TaskProps {
	value: string,
	draggableId: string,
	draggableIndex: number,
	labels: string[]
}