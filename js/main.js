// 사이트 전역 스크립트 기능

document.addEventListener('DOMContentLoaded', () => {
    // 1. 스크롤에 따른 헤더 디자인 변경
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. 모바일 메뉴 토글
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // 햄버거 아이콘 변경 로직 추가 가능 (ex: fa-bars <-> fa-times)
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 3. 현재 페이지에 맞는 네비게이션 메뉴 활성화
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        // 아주 단순한 매칭 (실제 환경에 맞게 개선 가능)
        if (currentPath.includes(itemPath) && itemPath !== 'index.html') {
            item.classList.add('active');
        } else if (currentPath.endsWith('/') && itemPath === 'index.html') {
            item.classList.add('active');
        }
    });

    // 4. 스크롤 애니메이션 옵저버 (요소가 화면에 나타날 때 효과)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });
});
