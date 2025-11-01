"use client"

import { useState } from "react"
import { DataTable } from "@/app/dashboard/components/dashboard/data-table"
import { FilterBar } from "@/app/dashboard/components/dashboard/filter-bar"
import { ProductFormModal, type ProductFormData } from "@/app/dashboard/components/dashboard/product-form-modal"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const mockInventoryData = [
  { id: "1", name: "Laptop", sku: "LAP-001", category: "Electronics", stock: 45, price: "Rp 15M" },
  { id: "2", name: "Mouse", sku: "MOU-001", category: "Electronics", stock: 230, price: "Rp 500K" },
  { id: "3", name: "Keyboard", sku: "KEY-001", category: "Electronics", stock: 120, price: "Rp 1.5M" },
  { id: "4", name: "Monitor", sku: "MON-001", category: "Electronics", stock: 35, price: "Rp 3M" },
  { id: "5", name: "Headphones", sku: "HEAD-001", category: "Electronics", stock: 89, price: "Rp 2M" },
]

export function InventoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [inventory, setInventory] = useState(mockInventoryData)

  const filteredData = inventory.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleAddProduct = (data: ProductFormData) => {
    setInventory([
      ...inventory,
      {
        id: String(inventory.length + 1),
        name: data.name,
        sku: data.sku,
        category: data.category,
        stock: Number(data.stock),
        price: data.price,
      },
    ])
    setIsModalOpen(false)
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">Manage your product inventory</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <FilterBar onSearch={setSearchQuery} searchPlaceholder="Search products..." />

      <DataTable
        title="Products"
        columns={[
          { key: "name", label: "Product Name" },
          { key: "sku", label: "SKU" },
          { key: "category", label: "Category" },
          { key: "stock", label: "Stock" },
          { key: "price", label: "Price" },
        ]}
        data={filteredData}
      />

      <ProductFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddProduct} />
    </div>
  )
}
