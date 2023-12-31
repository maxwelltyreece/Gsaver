import React from "react"
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Inject,
} from "@syncfusion/ej2-react-grids"

import {
	transactions,
	contextMenuItems,
	ordersGrid,
	tips,
	tipsGrid,
	comps,
} from "../data/dummy"
import { Header } from "../components"

const Tips = () => {
	const editing = { allowDeleting: true, allowEditing: true }
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<Header
				category="Page"
				title="Orders"
			/>
			<GridComponent
				id="gridcomp"
				dataSource={tips}
				allowPaging
				allowSorting
				allowExcelExport
				allowPdfExport
				allowTextWrap={true}
				contextMenuItems={contextMenuItems}
				editSettings={editing}
			>
				<ColumnsDirective>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					{tipsGrid.map((item, index) => (
						<ColumnDirective
							key={index}
							{...item}
							className="dark:bg-secondary-dark-bg"
						/>
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	)
}
export default Tips
