-- 아이스크림 총주문량이 3,000보다 높으면서 아이스크림의 주 성분이 과일인 아이스크림의 맛을 총주문량이 큰 순서대로 조회
SELECT FI.FLAVOR
FROM FIRST_HALF FI, ICECREAM_INFO IC
WHERE FI.FLAVOR=IC.FLAVOR AND FI.TOTAL_ORDER > 3000 AND IC.INGREDIENT_TYPE="fruit_based"
ORDER BY FI.TOTAL_ORDER DESC