import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={'Search for a product...'}/>
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
              <Image src="/avaa.png" alt='image' width={50} height={50} className={styles.productImage} />
              iPhone
              </div>
            </td>
            <td>Desc</td>
            <td>1200$</td>
            <td>12.02.2024</td>
            <td>33</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/1`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
