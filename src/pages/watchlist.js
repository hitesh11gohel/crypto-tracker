import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button/Button";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header";
import Tabs from "../components/Dashboard/Tabs/tabs";
import { DASHBOARD_API_URL } from "../constants";
import { Link } from "react-router-dom";

function WatchListPage() {
  const [coins, setCoins] = useState([]);
  const watchlist = localStorage.getItem("watchlist")
    ? localStorage.getItem("watchlist").split(",")
    : [];

  useEffect(() => {
    axios
      .get(DASHBOARD_API_URL)
      .then((response) => {
        var myCoins = response.data.filter((coins) =>
          watchlist.includes(coins.id)
        );
        setCoins(myCoins);
      })
      .catch((error) => {
        console.log("Error>>>", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div>
        {coins.length > 0 ? (
          <Tabs data={coins} />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Your watchlist is Currently Empty
            </h1>
            <p style={{ textAlign: "center", color: "var(--grey)" }}>
              Please Add Coins in your watchlist
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/dashboard">
                <Button text="Dashboard" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default WatchListPage;
