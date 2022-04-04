import List from '../components/subscribers/List.jsx'

const Page = () => {
    return (
        <div className="page">
            <List items={[{name: "Jo"}]} />
        </div>
    )
}

export default Page