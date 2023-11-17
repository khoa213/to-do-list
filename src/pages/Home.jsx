import React,{useState} from "react";
import { Layout } from "../layout/Layout";
import { Button,Modal } from "antd";
import { HomeForm } from "../components/Form/HomeForm";


const Home = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true); 
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <Layout>
            <Button onClick={showModal}>Add</Button>
            <Modal title="To-do work" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <HomeForm></HomeForm>
            </Modal>
        </Layout>
        
    )
}
export {Home};