import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ totalCount, dragonCount, averageCount }) {
    return (
        <>
            <CounterStats
                totalCount={totalCount}
                averageCount={averageCount}
                dragonCount={dragonCount}
            />

            <Link href="/counters">To the counters →</Link>
        </>
    );
}
