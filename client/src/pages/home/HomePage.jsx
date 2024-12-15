import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./home.css"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailComponent from "../../components/mailComp/MailComponent"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured />
        <h1 className="homePageTitles">Browse by property type</h1>
        <PropertyList />
        <h1 className="homePageTitles">Home guets love</h1>
        <FeaturedProperties />
        <MailComponent />
        <footer />
      </div>
    </div>
  )
}

export default HomePage