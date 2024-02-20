import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

export default function SingleProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/avaa.png' alt='avaa'  fill/>
        </div>
        iPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name='title' placeholder='title' />
          <label>Price</label>
          <input type="number" name='price' placeholder='price' />
          <label>Stock</label>
          <input type="number" name='stock' placeholder='stock' />
          <label>Color</label>
          <input type="text" name='color' placeholder='color' />
          <label>Size</label>
          <textarea  name='text' placeholder='size' />
          <label>Cat</label>
          <select name="cat" id="cat">
          <option value="general" hidden>Choose a Category</option>
          <option value="kitchen" >Kitchen</option>
          <option value="phone" >Phone</option>
          <option value="computer" >Computer</option>
        </select>
        <textarea name="desc" id="desc" cols={30} rows={10} placeholder='Description'></textarea>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}
