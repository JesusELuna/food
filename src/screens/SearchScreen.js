import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/resultList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Efective"
        ></ResultList>
        <ResultList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        ></ResultList>
        <ResultList
          results={filterResultsByPrice("$$$")}
          title="Big spender"
        ></ResultList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
