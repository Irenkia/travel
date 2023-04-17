import React from "react";
import Footer from "../components/footer/Footer";
import { useTranslation } from "react-i18next";
import "./../styles/App.css";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="dashboard">
        <h1>
          {t("dashboard_title")}
          {/* Dashboard */}
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
