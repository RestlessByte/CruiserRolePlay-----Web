'use client'
import { useEffect, useMemo, useState } from "react";
import { Header } from "../../ui/header";
import styles from './index.module.scss'
import { checkUser } from "../../ux/checkUser";
import { Auth } from "../../ui/auth";
export default function Page() {
  const [state, setState] = useState({
    isLoading: false,
    user: null,
    text: 'Проверяем ваш аккаунт!',
    code: null
  })
  useEffect(() => setState(e => ({ ...e, isLoading: true })), [])
  useMemo(async () => {
    const api = await checkUser()
    setState(e => ({ ...e, text: api.text, code: api.code }))
  }, [state.isLoading])
  return (
    <Header>
      <div className={styles.container}>
        <span className={styles.title}>
          {state.text} {state.code !== 404 ? (
            <span className={styles.loading}></span>
          ) :
            (<Auth />)}
        </span>
      </div>
    </Header>
  )

}