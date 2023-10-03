import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search/search";
import Tabs from "../components/Dashboard/Tabs/tabs";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Loading from "../components/Common/Loading/loading";
import PaginationComponent from "../components/Dashboard/PaginationComponent/pagination";
import Footer from "../components/Common/Footer/footer";
import { get100Coins } from "../functions/get100Coins";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCoins, setPageCoins] = useState([]);

  var filteredCoins = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
    // return [];
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await get100Coins();
    if (response) {
      setData(response);
      setLoading(false);
      setPageCoins(response.slice(0, 12));
      setPageNumber(response.length / 10);
    }
  };

  var mybutton = document.getElementById("myBtn");

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  const handleChange = (event, value) => {
    console.log("==> value :", value);
    console.log(
      "==> ok :",
      data.slice((value - 1) * 12, (value - 1) * 12 + 12)
    );
    setPageCoins(data.slice((value - 1) * 12, (value - 1) * 12 + 12));
    setPageNumber(value);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <Tabs data={search ? filteredCoins : pageCoins} />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handleChange}
            />
          )}
          <Footer />
        </>
      )}

      <div onClick={() => topFunction()} id="myBtn" className="top-btn">
        <ArrowUpwardIcon sx={{ color: "var(--blue)" }} />
      </div>
    </div>
  );
}

export default DashboardPage;
