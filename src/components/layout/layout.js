import * as React from 'react'
import {section, main} from './layout.module.scss'
import Header from "../header/header";
const Layout = ({ pageTitle, children }) => {
    return (
        <div className={section}>
            <Header/>
            <main className={main}>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
export default Layout