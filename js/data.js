// 이 파일은 사용자가 나중에 컨설팅 사례나 홍보글을 작성할 때 
// HTML을 직접 수정하지 않고, 배열에 데이터만 추가하면 
// 리스트 화면(cases.html)과 메인 화면(index.html)에 자동으로 노출되게 해주는 데이터 소스입니다.

const SK_BOARD_DATA = [
    {
        id: "case-001",
        category: "컨설팅 사례",
        date: "2024-05-20",
        title: "창원 국가유산단지 기업 입주 컨설팅 완료",
        desc: "스마트팩토리 설비를 위한 대규모 공장 부지 탐색부터 계약, 입주 후 행정 처리까지 원스톱으로 지원한 사례입니다.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
        content: `자세한 내용은 향후 이곳에 기입할 수 있습니다.`
    },
    {
        id: "promo-001",
        category: "홍보글",
        date: "2024-05-15",
        title: "SK테크노파크 최적의 사무실 매물 안내 서비스",
        desc: "귀하의 비즈니스에 가장 적합한 SK테크노파크 내 넥스동, 메카동 등의 사무실을 매칭해 드립니다. 전문가의 꼼꼼한 권리 분석이 동반됩니다.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        content: `자세한 내용은 향후 이곳에 기입할 수 있습니다.`
    },
    {
        id: "case-002",
        category: "사례공유",
        date: "2024-05-02",
        title: "IT 스타트업 창업 연구소 임대차 계약 체결",
        desc: "새롭게 출발하는 IT 스타트업 대표님을 위해 정부 지원금 혜택을 받을 수 있는 최적의 연구 시설을 수배하여 성공적으로 계약을 마쳤습니다.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
        content: `자세한 내용은 향후 이곳에 기입할 수 있습니다.`
    }
];

// 최신 글 3개 가져오기 (메인 페이지용)
function getRecentPosts(count = 3) {
    return SK_BOARD_DATA.slice(0, count);
}

// 전체 글 가져오기 (목록 페이지용)
function getAllPosts() {
    return SK_BOARD_DATA;
}

// 특정 ID의 글 가져오기
function getPostById(id) {
    return SK_BOARD_DATA.find(post => post.id === id);
}
