// HexaVuln AI - MVP Logic (Demo Mode)

// Authentication
function checkAuth() {
    const user = localStorage.getItem('hexavuln_user');
    if (user) {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'grid';
        document.getElementById('user-display').innerText = user;
    } else {
        document.getElementById('auth-screen').style.display = 'flex';
        document.getElementById('app-screen').style.display = 'none';
    }
}

function login() {
    const username = document.getElementById('demo-username').value;
    if (username.trim() !== '') {
        localStorage.setItem('hexavuln_user', username);
        checkAuth();
    }
}

function logout() {
    localStorage.removeItem('hexavuln_user');
    checkAuth();
}

function newCase() {
    alert("New case created (Demo Mode).");
}

// Demo AI Provider Adapter
class DemoProvider {
    async analyze(evidence) {
        // Simulate network delay
        return new Promise((resolve) => {
            setTimeout(() => {
                let isIDOR = evidence.includes('9082') || evidence.includes('private');
                
                if (isIDOR) {
                    resolve({
                        vulnerability: "Insecure Direct Object Reference (IDOR)",
                        confidence: "High (0.95)",
                        affectedComponent: "API Endpoint: /v1/users/{id}/private_data",
                        rootCause: "The endpoint fails to validate whether the authenticated user (indicated by the Bearer token) has authorization to access the object referenced by the ID parameter.",
                        remediation: "Implement robust authorization checks. Verify that the `user_token_123` corresponds to the requested resource ID `9082`.",
                        severity: "High",
                        validation: "Try accessing the endpoint with a token belonging to a completely different user role."
                    });
                } else {
                    resolve({
                        vulnerability: "No obvious critical vulnerability detected",
                        confidence: "Medium (0.60)",
                        affectedComponent: "Unknown",
                        rootCause: "N/A",
                        remediation: "Review business logic and input validation manually.",
                        severity: "Informational",
                        validation: "Continue manual fuzzing."
                    });
                }
            }, 1500);
        });
    }
}

const aiProvider = new DemoProvider();

async function analyzeEvidence() {
    const btn = document.getElementById('analyze-btn');
    const evidence = document.getElementById('evidence-input').value;
    const resultBox = document.getElementById('analysis-result');
    const reportContent = document.getElementById('report-content');

    if (!evidence.trim()) {
        alert("Please provide some evidence to analyze.");
        return;
    }

    // UI Loading state
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...';
    btn.disabled = true;
    resultBox.style.display = 'none';

    // Call AI Adapter
    const analysis = await aiProvider.analyze(evidence);

    // Render Report
    reportContent.innerHTML = `
        <p><strong>Potential Vulnerability:</strong> <span style="color: #FF5F56">${analysis.vulnerability}</span></p>
        <p><strong>Severity:</strong> ${analysis.severity} | <strong>Confidence:</strong> ${analysis.confidence}</p>
        <p><strong>Affected Component:</strong> <code>${analysis.affectedComponent}</code></p>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-primary); border-radius: 8px;">
            <h4 style="margin-bottom: 0.5rem; color: var(--accent-primary);">Root Cause Analysis</h4>
            <p>${analysis.rootCause}</p>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-primary); border-radius: 8px;">
            <h4 style="margin-bottom: 0.5rem; color: #27C93F;">Remediation</h4>
            <p>${analysis.remediation}</p>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-primary); border-radius: 8px;">
            <h4 style="margin-bottom: 0.5rem; color: #FFBD2E;">Recommended Validation</h4>
            <p>${analysis.validation}</p>
        </div>
    `;

    // UI Reset state
    btn.innerHTML = '<i class="fa-solid fa-brain"></i> Analyze with Claude (Demo)';
    btn.disabled = false;
    resultBox.style.display = 'block';
}

// Init
window.onload = checkAuth;
