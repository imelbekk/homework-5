import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { fetchUsers } from '@/app/lib/data'


export default async function SingleUser() {  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/avaa.png' alt='avaa'  fill/>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name='username' placeholder='username' />
          <label>Email</label>
          <input type="email" name='email' placeholder='email' />
          <label>Password</label>
          <input type="password" name='password' placeholder='password' />
          <label>Phone</label>
          <input type="phone" name='phone' placeholder='phone' />
          <label>Address</label>
          <textarea  name='address' placeholder='address' />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="" hidden>Is Admin?</option>
            <option value="">Yes</option>
            <option value="">No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
            <option value="" hidden>Is Active?</option>
            <option value="">Yes</option>
            <option value="">No</option>
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  )
}
