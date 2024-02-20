import React from 'react'
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'


export default function AddUserPage() {
  const rows:number = 16
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder='username' name='username' required />
        <input type="email" placeholder='email' name='email' required />
        <input type="password" placeholder='password' name='password' required />
        <input type="phone" placeholder='phone' name='phone' />
        <select name="isAdmin" id="isAdmin">
          <option value="" hidden>Is Admin?</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="" hidden>Is Active?</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <textarea name="adress" id="" rows={rows} placeholder='Address'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}
