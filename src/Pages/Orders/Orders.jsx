import { Helmet } from "react-helmet-async";
import useMenu from "../hooks/useMenu";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Nav/Navbar";
import Menubanner from "../menu/Menubanner";
import bannerImg2 from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import FoodCard from "../components/FoodCard/FoodCard";
import MenuCategory from "../menu/MenuCategory";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";


const Orders = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered' ];
    const {category}= useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item =>item.category ==='offered')

    return (
        <div>
            <Helmet>
                <title>BBs|ourshop</title>
            </Helmet>
            {/* <Navbar></Navbar> */}
            <Menubanner img={bannerImg2} heading={"our shop"} paragraph={"WOULD YOU LIKE TO TRY A DISH"} ></Menubanner>
            <div className="text-center my-10">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={"text-blue-800 my-10"}>
                        <Tab>SALAD</Tab>
                        <Tab>PIZAA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                        <Tab>TODAY'S OFFERS</Tab>
                    </TabList>
                    <TabPanel>
                        {/* <div className="md:grid grid-cols-3 gap-1 mb-10">
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div> */}
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        {/* <div className="md:grid grid-cols-3 gap-1 mb-10">
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div> */}
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        {/* <div className="md:grid grid-cols-3 gap-1 mb-10">
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div> */}
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        {/* <div className="md:grid grid-cols-3 gap-1 mb-10">
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div> */}
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        {/* <div className="md:grid grid-cols-3 gap-1 mb-10">
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div> */}
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        {/* <div className="md:grid grid-cols-3 gap-1 mb-10">
                            {
                                offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div> */}
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Orders;