import Hero from "./HeroSection"
import OurClients from "./OurClients";
import ManageCommunity from "./ManageCommunity";
import OrganisationsAndGroups from "./OrganisationsAndGroups";
import SecondHeroSection from "./SecondHeroSection";
import FavouriteColor from "./FavouriteColor";
const Home = ()=>{
    return(
        <>
            <Hero/>
            <OurClients/>
            <ManageCommunity/>
            <OrganisationsAndGroups/>
            <SecondHeroSection/>
            {/*<FavouriteColor/>*/}
        </>
        )

}
export default Home