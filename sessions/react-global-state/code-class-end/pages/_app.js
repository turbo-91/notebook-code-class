import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
    const initialAnimals = [
        { id: 1, name: "Cats", count: 0 },
        { id: 2, name: "Dogs", count: 0 },
        { id: 3, name: "Sheep", count: 0 },
        { id: 4, name: "Dragons", count: 0 },
    ];
    const [animals, setAnimals] = useState(initialAnimals);

    function handleAdd(_id) {
        // console.log("clicked on Add", _id);
        // setCount(count + 1);
        const newAnimals = animals.map((animal) =>
            animal.id === _id ? { ...animal, count: animal.count + 1 } : animal
        );
        setAnimals(newAnimals);
    }

    function handleSubtract(_id) {
        // console.log("clicked on Subtract", _id);
        // setCount(Math.max(0, count - 1));
        const newAnimals = animals.map((animal) =>
            animal.id === _id
                ? { ...animal, count: Math.max(0, animal.count - 1) }
                : animal
        );
        setAnimals(newAnimals);
    }

    const totalCount = animals
        .map((animal) => animal.count)
        .reduce((cur, acc) => acc + cur);
    const averageCount = totalCount / animals.length;
    const dragonCount = animals.find(
        (animal) => animal.name === "Dragons"
    ).count;

    return (
        <>
            <GlobalStyle />
            <Layout totalCount={totalCount} dragonCount={dragonCount}>
                <Component
                    {...pageProps}
                    animals={animals}
                    handleAdd={handleAdd}
                    handleSubtract={handleSubtract}
                    totalCount={totalCount}
                    dragonCount={dragonCount}
                    averageCount={averageCount}
                />
            </Layout>
        </>
    );
}
