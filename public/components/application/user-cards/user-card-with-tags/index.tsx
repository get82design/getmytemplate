import * as React from 'react'
import * as ReactDOM from 'react-dom'
import UserCardWithTags from './UserCardWithTags'

const UserCardWithTagsDemo = () => {
    return <UserCardWithTags  user={{
            firstName: '',
            lastName: '',
            speciality: '',
            city: '',
            country: '',
            month: '',
            year: '',
            image: ''
        }} tags={[]} /> 
}
const domContainer = document.querySelector('#user-card-with-tags')
ReactDOM.render(<UserCardWithTagsDemo/>, domContainer)